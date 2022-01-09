// 引入"外壳"组件APP.
import React from "react"
import Hello from "./components/Hello"
import Welcome from "./components/Welcome"

// 创建外壳组件 App
class App extends React.Component {
    render() {
        return (
            <div><Hello/><Welcome/></div>
        )
    }
}

// 暴露 App 组件
export default App