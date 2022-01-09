import React, { Component } from "react";
import "./index.css";

export default class Footer extends Component {
    handleCheckAll = (event) => {
        this.props.checkAllTodos(event.target.checked);
    };

    clearAll = () => {
        this.props.clearAllTodos();
    };

    render() {
        const { todos } = this.props;
        // 计算已完成
        const countDone = todos.reduce((pre, currentTodo) => {
            return pre + (currentTodo.done ? 1 : 0);
        }, 0);
        // 总数
        const totalTodos = todos.reduce((pre) => {
            return pre + 1;
        }, 0);

        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" onChange={this.handleCheckAll} checked={countDone === totalTodos ? true : false} />
                </label>
                <span>
                    {" "}
                    <span>已完成{countDone}</span> / 全部{totalTodos}{" "}
                </span>
                <button onClick={this.clearAll} className="btn btn-danger">
                    清除已完成任务
                </button>
            </div>
        );
    }
}
