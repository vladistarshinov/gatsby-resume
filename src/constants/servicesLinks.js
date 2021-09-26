import React from "react"
import { FcDiploma1, FcDiploma2, FcIdea } from "react-icons/fc"

export default [
  {
    id: 1,
    icon: <FcDiploma1 style={{ fontSize: "2rem", marginBottom: "1.5rem" }} />,
    title: "Бакалавр",
    text: `Информатика и вычислительная техника, Томский политехнический университет, 2017`,
  },
  {
    id: 2,
    icon: <FcDiploma2 style={{ fontSize: "2rem", marginBottom: "1.5rem" }} />,
    title: "Магистр",
    text: `Информационные системы и технологии, Томский политехнический университет, 2019`,
  },
  {
    id: 3,
    icon: <FcIdea style={{ fontSize: "2rem", marginBottom: "1.5rem" }} />,
    title: "Аспирант",
    text: `Информатика и вычислительная техника, Томский политехнический университет, год окончания - 2023`,
  },
]