import React, { useState, useEffect } from "react"
import { v4 } from "uuid"

import { Button } from "./components/button"
import { IconsButton } from "./components/icons"
import { Input } from "./components/input"
import { ErrorAlert } from "./components/modal"
import { Modal } from "./components/edit_screen/index"
import * as C from "./styles/index"

function App() {
  const [alertMessage, setAlertMessage] = useState(false)
  const [input, setInput] = useState("")
  const [valueTextArea, setValueTextArea] = useState("")
  const [open, setOpen] = useState(false)
  const [tasks, setTasks] = useState([])
  const [savedId, setSavedId] = useState()
  const [search, setSearch] = useState("")

  let taskSearch = tasks.filter((item) => item.task.startsWith(search))

  const newTask = () => {
    if (input === "") {
      setAlertMessage(true)
      return
    }
    const newUser = { id: v4(), task: input, finished: false }

    setTasks([...tasks, newUser])
    addLocalStorage([...tasks, newUser])
    setInput("")
  }

  function taskCompleted(id) {
    const newList = tasks.map((item) =>
      item.id === id ? { ...item, finished: !item.finished } : item
    )

    setTasks(newList)
    addLocalStorage(newList)
  }

  const deleteTask = (id) => {
    const newList = tasks.filter((item) => item.id !== id)

    setTasks(newList)
    addLocalStorage(newList)
  }

  const openModal = (id) => {
    setOpen(true)
    setSavedId(id)
  }

  const editTask = () => {
    if (valueTextArea == "") {
      setAlertMessage(true)
      return
    }
    const newList = tasks.map((item) =>
      item.id === savedId ? { ...item, task: valueTextArea } : item
    )

    setTasks(newList)
    addLocalStorage(newList)
    setOpen(false)
    setValueTextArea("")
  }

  const closeModal = () => setOpen(!open)

  const valueText = (e) => setValueTextArea(e)

  function addLocalStorage(data) {
    localStorage.setItem("arrayTasks", JSON.stringify(data))
    console.log(localStorage.arrayTasks)
  }

  useEffect(() => {
    if (localStorage.arrayTasks) {
      let banco = localStorage.getItem("arrayTasks")
      setTasks(JSON.parse(banco))
      return
    }

    localStorage.setItem("arrayTasks", JSON.stringify([]))
  }, [])

  return (
    <C.Container>
      <C.Typography
        border="1px solid #353a3c"
        fontWeight="400"
        size="34px"
        lineHeight="48px"
        align="center"
      >
        Todo list 2.0
      </C.Typography>
      <C.boxSaveTasks>
        <C.Typography>Adicionar Tarefa</C.Typography>
        <div>
          <Input
            value={input}
            placeholder="O que tenho que fazer..."
            onChange={(value) => setInput(value)}
          />
          <Button onClick={() => newTask()}>+</Button>
        </div>
      </C.boxSaveTasks>

      <C.Flex>
        <C.SearchBox>
          <C.Typography>Pesquisar</C.Typography>
          <Input
            width="337px"
            onChange={(e) => setSearch(e)}
            placeholder="Buscar..."
          />
        </C.SearchBox>

        <ErrorAlert
          open={alertMessage}
          onClick={() => setAlertMessage(false)}
        />

        <Modal
          value={valueTextArea}
          onChange={(e) => valueText(e)}
          saveEdit={() => editTask()}
          back={() => closeModal()}
          open={open}
        />
      </C.Flex>

      {search !== ""
        ? taskSearch.map((item) => (
            <C.listTask isFinished={item.finished} key={item.id}>
              <C.TextTask>{item.task}</C.TextTask>
              <IconsButton
                editTask={() => openModal(item.id)}
                finished={() => taskCompleted(item.id)}
                deleteTask={() => deleteTask(item.id)}
              />
            </C.listTask>
          ))
        : tasks.map((item) => (
            <C.listTask isFinished={item.finished} key={item.id}>
              <C.TextTask>{item.task}</C.TextTask>
              <IconsButton
                editTask={() => openModal(item.id)}
                finished={() => taskCompleted(item.id)}
                deleteTask={() => deleteTask(item.id)}
              />
            </C.listTask>
          ))}
    </C.Container>
  )
}

export default App
