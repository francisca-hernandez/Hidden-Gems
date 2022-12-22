import React from 'react'

const Footer = () => {
  return (
    <footer
      className="w-100 bg-secondary p-4 fixed-bottom"
      style={{
        marginTop: '100px', // Some regular vanilla CSS mixed in
      }}
    >
      <div className="container">
        &copy;{new Date().getFullYear()} Breakout Rm 16 &nbsp;
        <a
          href="https://github.com/francisca-hernandez/Hidden-Gems"
          rel="noreferrer"
          target="_blank"
        >
          View on Github
        </a>{' '}
        | If you know, you know
      </div>
    </footer>
  )
}

export default Footer
