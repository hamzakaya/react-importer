import React, { useState } from 'react';
import Importer from 'react-importer'
import { JsonEditor as Editor } from 'jsoneditor-react';

import 'jsoneditor-react/es/editor.min.css';
import 'react-importer/dist/index.css'

const App = () => {
  const [ready, setReady] = useState(false);
  const onComplete = (data) => {
    console.log(data);
    setReady(true);
  }
  const content = `<Importer
  fields={[
    {
      label: "Name", key: "name", validators: [
        { validate: "required" },
      ]
    },
    {
      label: "Email", key: "email", validators: [
        { validate: "required" },
        { validate: "unique", error: "This email is not unique" },
      ]
    },
    { label: "State", key: "state" },
  ]}
  onComplete={(data) => {
    console.log(data)
  }}
/>`
  return (
    <div>
      <div className="container">
        <div className="header">
          <div className="main">
            <svg style={{marginRight: '20px'}} xmlns="http://www.w3.org/2000/svg" width="58" height="58" fill="#3498db" className="bi bi-file-spreadsheet" viewBox="0 0 16 16">
              <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM6.354 9.854a.5.5 0 0 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 8.707V12.5a.5.5 0 0 1-1 0V8.707L6.354 9.854z" />
            </svg>
            React Importer
          </div>
          <div className="subtext">A modern CSV importer in React.</div>
        </div>

        <div className="content">
          <h1>Building a CSV uploader is hard.</h1>
          <div>Tired of people uploading invalid data into your application? Or writing custom import scripts that keep breaking?</div>
        </div>

        <div className="content">
          <h1>Drop in an uploader into your app in seconds.</h1>
          <div>
            <pre>
              <code className="language-jsx">
                {content}
              </code>
            </pre>
          </div>
        </div>

        <div className="content">
          <h1>Want to see a demo? Try uploading <a href="data.csv">this file</a>.</h1>
          <Importer
            fields={[
              {
                label: "Name", key: "name", validators: [
                  { validate: "required" },
                ]
              },
              {
                label: "Email", key: "email", validators: [
                  { validate: "required" },
                  { validate: "unique", error: "This email is not unique" },
                  {
                    validate: "regex_matches",
                    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  },
                ]
              },
              {
                label: "Phone Number", key: "phone_number", validators: [
                  { validate: "required" },
                ]
              },
              { label: "City", key: "city" },
              { label: "State", key: "state" },
            ]}
            onComplete={onComplete}
          />
          {ready && (
            <div style={{ margin: "0 auto", maxWidth: "1200px" }}>
              <h4>Check the console for the output!</h4>
            </div>
          )}
        </div>
      </div>
    </div>
  )
};

export default App;
