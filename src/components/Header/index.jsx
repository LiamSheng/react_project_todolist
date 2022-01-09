import React, { Component } from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import "./index.css";

export default class Header extends Component {
    // 对接收的props进行类型和必要性的限制.
    static propTypes = {
        addTodo: PropTypes.func.isRequired,
    };

    handleKeyUp = (event) => {
        // 解构赋值
        const { key, target } = event;
        // 判断是否是回车按键
        if (key !== "Enter") return;
        // 添加的 todo 名字不能为空
        if (target.value.trim() === "") {
            alert("输入不能为空!");
        }
        // 准备好一个 todo 对象
        const todoObj = { id: nanoid(), name: target.value, done: false };
        // 将 todoObj 传递给 app
        this.props.addTodo(todoObj);
        target.value = "";
    };
    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
            </div>
        );
    }
}
