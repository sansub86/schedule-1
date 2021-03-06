import React from "react"
import { MyTag } from "@ui"
import { Button } from "antd";
import s from "../Header/header.module.css";
import EditOutlined from "@ant-design/icons/lib/icons/EditOutlined";
import DeleteOutlined from "@ant-design/icons/lib/icons/DeleteOutlined";
import {classes} from "istanbul-lib-coverage";

export const setRowStyleByType = (type, table) => {
  switch (type) {
    case "Лекция":
      return [
        classes[table.lecture.background],
        classes[table.lecture.fontColor],
      ]
    case "Практическое занятие":
      return [
        classes[table.practice.background],
        classes[table.practice.fontColor],
      ]
    default:
      return null
  }
}
export const columns = [
  {
    title: 'Действия',
    key: 'action',
    sorter: false,
    render: (text, record) => (
      <div>
        <Button data-key={record.id} className={s.editTask} size="large" type="default" icon={<EditOutlined />}></Button>
        <Button data-key={record.id} className={s.deleteTask} size="large" type="default" icon={<DeleteOutlined/>}></Button>
      </div>
    ),
  },
  {
    title: "Дата",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Время начала",
    dataIndex: "time",
    key: "time",
  },
  {
    title: "Длительность",
    dataIndex: "duration",
    key: "duration",
  },
  {
    title: "Название",
    dataIndex: "name",
    key: "name",
    render: (name) => <a href="/#">{name}</a>,
  },
  {
    title: "Лектор",
    dataIndex: "author",
    key: "author",
    render: (author) => <a href="/#">{author}</a>,
  },
  {
    title: "Формат",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "Теги",
    dataIndex: "tags",
    key: "tags",
    render: (tags) => <MyTag tags={tags} />,
  },
  {
    title: "Доп. материалы",
    dataIndex: "optional",
    key: "optional",
    render: (optional) => <a href="/#">{optional}</a>,
  },
]
