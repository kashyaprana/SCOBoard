import React from 'react'
import "./fileaccess.scss"
import Nav from "../../components/adminNav/Nav.jsx"

const FileAccess = () => {
    return (
      <div className="fix">

          < Nav/>
      <div className="FileAccess">
      <h1>Access Uploaded Files</h1>
        <p>To access uploaded files, copy and paste the following URL into your search engine: </p>
        <p>https://storage.googleapis.com/scoapp-8527b.appspot.com/files/file_name</p>
        <p>Note that "file_name" should be the name of the file you are trying to access.</p>
      </div>
        </div>
    )
}

export default FileAccess