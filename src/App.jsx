import React, { Component } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import List from "./components/List";

export default class App extends Component {
    // 初始化状态
    state = {
        todos: [
            { id: "001", name: "吃饭", done: true },
            { id: "002", name: "睡觉", done: false },
            { id: "003", name: "打代码", done: false },
        ],
    };

    /* 子组件向父组件传值, 用于添加一个todo, 接收的参数是todo对象 */
    addTodo = (todoObj) => {
        //获取原来的todos
        const { todos } = this.state;
        //追加一个todo
        const newTodos = [todoObj, ...todos];
        //更新状态
        this.setState({ todos: newTodos });
    };

    // 用于更新一个todo对象
    updateTodo = (id, done) => {
        // 获取状态中的 todos
        const { todos } = this.state;
        // 匹配处理数据
        const newTodos = todos.map((todoObj) => {
            if (todoObj.id === id) return { ...todoObj, done: done };
            else return todoObj;
        });
        this.setState({ todos: newTodos });
    };

    // 用于删除一个todo对象
    deleteTodo = (id) => {
        // 获取原来的todos
        const { todos } = this.state;
        // 删除指定的 todo 对象
        const newTodos = todos.filter((todoObj) => {
            return todoObj.id !== id;
        });
        // 更新状态
        this.setState({ todos: newTodos });
    };

    // 全选/全不选 所有的 todo 对象
    checkAllTodos = (done) => {
        // 获取原来的 todos
        const { todos } = this.state;
        // 所有的 todos 的 done 都为真
        const newTodos = todos.map((curTodo) => {
            return { ...curTodo, done: done };
        });
        // 更新状态
        this.setState({ todos: newTodos });
    };

    // 清楚所有的 todo 对象
    clearAllTodos = () => {
        // 获取原来的todos
        const { todos } = this.state;
        // 删除指定的 todo 对象
        const newTodos = todos.filter((todoObj) => {
            return !todoObj.done;
        });
        // 更新状态
        this.setState({ todos: newTodos });
    };

    render() {
        const { todos } = this.state;
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    {/* 子组件向父组件传值 */}
                    <Header addTodo={this.addTodo} />
                    <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
                    <Footer todos={todos} checkAllTodos={this.checkAllTodos} clearAllTodos={this.clearAllTodos} />
                </div>
            </div>
        );
    }
}
