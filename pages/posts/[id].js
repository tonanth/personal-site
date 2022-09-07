// @ts-nochecks

import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';
import styles from '../../styles/article.module.scss'
import ReactMarkdown from 'react-markdown';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism'

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <div className={styles.articlehead}>
          <h1 className={utilStyles.headingXl}>{postData.title}</h1>
          <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
            <br />
            <br />
            {postData.description}
          </div>
        </div>

        
        <ReactMarkdown className={styles.articlebody} children={postData.contentMarkdown} 
        components = {{
          code({node, inline, className, children, ...props}) {
            if (inline) {
              return (
                <code>{children}</code> 
              )
            } else {
              const match = /language-(\w+)/.exec(className || '');
              const lang = match ? match[1] : 'none';
              console.log(lang)
              return (
                <SyntaxHighlighter  
                  children={String(children).replace(/\n$/, '')}
                  language={lang}
                  codeTagProps={{style: {fontFamily: 'Fira Code'}}}
                />
              )
            }
            // return !inline && null ? (
            //   <SyntaxHighlighter
            //     children={String(children).replace(/\n$/, '')}
            //     style={dark}
            //     language={null}
            //     PreTag="div"
            //     {...props}
            //   />
            // ) : (
            //   <code className={className} {...props}>
            //     {children}
            //   </code>
            // )
          }
        }} />
        {/* <div className={styles.articlebody} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} /> */}
      </article>
    </Layout>
  );
}