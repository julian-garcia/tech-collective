import React from "react"

if (typeof window !== `undefined`) {
  console.log(window.location.pathname);
  if (window.location.pathname.indexOf('build-your-own-chatbot') !== -1) {
    window.location.replace('http://chatbot.collective.tech/')
  }
}

const BuildChatbotPage = () => {
  return <></>
}

export default BuildChatbotPage
