import Link from 'next/link';

import errorClasses from '../styles/error.module.css';

export default function ErrorPage() {
  return (
    <>
      <div className={errorClasses.errorContainer}>
        <h1 className={errorClasses.error}>Error 404</h1>
        <p>Please &nbsp;
          <Link href={'/'}>
            <a>go back</a>
          </Link>
          &nbsp;
          to safety
        </p>
      </div>
    </>
  )
}