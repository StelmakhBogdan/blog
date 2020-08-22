import Link from 'next/link';
import Head from 'next/head';


export function MainLayout({ children, title = 'Blog by Stelmakh Bohdan' }) {
  return (
    <>
      <Head>
        <title>{title} | Blog by Stelmakh Bohdan</title>
        <meta name="keywords" content="next, javascript,next.js,react" />
        <meta name="description" content="Creating Blog" />
        <meta charSet="utf-8" />
      </Head>

      <nav>
        <img src="/logo1.png"/>
        <ul>
          <Link href={'/'}><a>Blog</a></Link>
          <Link href={'/posts'}><a>Posts</a></Link>
          <Link href={'/posts/new'}><a>Create New Post</a></Link>
        </ul>
      </nav>
      <main>
        {children}
      </main>
      <style jsx>{`
        nav {
          position: fixed;
          height:60px;
          top: 0;
          left: 0;
          right: 0;
          background: darkgrey;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        
        img {
          height: 55px;
        }
        
        nav ul {
          width: 400px;
          display: flex;
          justify-content: space-between;
        }
        
        nav a {
          color: #eaeaea;
          text-decoration: none;
        }
        
        main {
          margin-top: 60px;
          padding: 1rem;
          //<Route>
        }
      `}</style>
    </>
  )
}