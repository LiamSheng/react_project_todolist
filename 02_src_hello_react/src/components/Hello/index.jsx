// 引入"外壳"组件APP.
import React,{Component} from "react"
import hello from "./index.module.css"

// 创建并暴露外壳组件 App
export default class Hello extends React.Component {
    render() {
        return (
            <div>
                <h2 className="Hello.title">Hello, React!</h2>
            </div>
        )
    }
}