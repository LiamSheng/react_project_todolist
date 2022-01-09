import React, { Component } from "react";
import "./index.css";

export default class Item extends Component {
    // 状态在哪里, 操作状态的方法就在那里
    state = { mouse: false };

    // 鼠标移入移出
    handleMouse = (flag) => {
        return () => {
            this.setState({ mouse: flag });
        };
    };

    // 勾选/取消勾选某一个todo回调
    handleCheck = (id) => {
        return (event) => {
            this.props.updateTodo(id, event.target.checked);
        };
    };

    // 删除一个 todo 的回调
    handleDelete = (id) => {
        if (window.confirm("确定删除吗?")) {
            this.props.deleteTodo(id);
        }
    };

    render() {
        const { id, name, done } = this.props;
        return (
            <li
                style={{ backgroundColor: this.state.mouse ? "#F5F5F5" : "white" }}
                onMouseEnter={this.handleMouse(true)}
                onMouseLeave={this.handleMouse(false)}
            >
                <label>
                    <input onChange={this.handleCheck(id)} type="checkbox" checked={done} />
                    <span>{name}</span>
                </label>
                <button
                    onClick={() => {
                        this.handleDelete(id);
                    }}
                    className="btn btn-danger"
                    style={{ display: this.state.mouse ? "block" : "none" }}
                >
                    删除
                </button>
            </li>
        );
    }
}
