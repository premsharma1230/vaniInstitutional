import React, { useRef, useState } from "react"
import { ReactReader, ReactReaderStyle } from "react-reader"
import ss from './Around_the_World_in_28_Languages (2).epub'
import { useLocation, Link, useNavigate } from "react-router-dom";

export default function ReadBook (){
  const [page, setPage] = useState('')
  const renditionRef = useRef(null)
  const tocRef = useRef(null)
  const { state } = useLocation();
  const readme = state?.readme
  const locationChanged = (epubcifi) => {
    if (renditionRef.current && tocRef.current) {
      const { displayed, href } = renditionRef.current.location.start
      const chapter = tocRef.current.find((item) => item.href === href)
      setPage(`Page ${displayed.page} of ${displayed.total} in chapter ${chapter ? chapter.label : 'n/a'}`)
    }
  }
  const ownStyles = {
    ...ReactReaderStyle,
    arrow: {
      ...ReactReaderStyle.arrow,
      color: 'red'
    }
  }
  return (
    <>
      <div style={{ height: '84vh', width:'38vw', margin:'auto', marginTop: '8rem', boxShadow: '0px 0px 27px rgb(0 0 0 / 25%)' }}>
        <ReactReader
          locationChanged={locationChanged}
          url={readme}
          epubInitOptions={{
            openAs: 'epub'
          }}
          // epubOptions={{
          //   flow: "scrolled",
          //   manager: "continuous"
          // }}
          getRendition={(rendition) => renditionRef.current = rendition}
          tocChanged={toc => tocRef.current = toc}
          showToc={false}
          styles={ownStyles}
        />
      </div>
      <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', left: '1rem', textAlign: 'center', zIndex: 1}}>
        {page}
      </div>
    </>
  )
}