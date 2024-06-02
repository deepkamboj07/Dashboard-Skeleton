import { useState } from 'react'
import RootLayout from './wrapper/RootLayout';
import { Layout } from 'antd';
function App() {
  
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}>
      <RootLayout/>
    </Layout>
  )
}

export default App
