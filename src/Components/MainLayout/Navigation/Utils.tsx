import React from 'react'
import News from '../../UI/Icons/News'
import TimeTable from '../../UI/Icons/TimeTable'
import User from '../../UI/Icons/User'
import Marks from '../../UI/Icons/Marks'
import Subject from '../../UI/Icons/Subject'
import { Color } from '../../../Utils/Constans'
import Teacher from '../../UI/Icons/Teacher'

export const navigationTitles = [
  {
    title: 'Новости',
    icon: <News color={Color.blue} />,
    url: 'News',
  },
  {
    title: 'Расписание',
    icon: <TimeTable color={Color.blue} />,
    url: 'Shedule',
  },
  {
    title: 'Студенты',
    icon: <User color={Color.blue} />,
    url: 'Students',
  },
  {
    title: 'Преподаватели',
    icon: <Teacher color={Color.blue} />,
    url: 'Teachers',
  },
  {
    title: 'Успеваемость',
    icon: <Marks color={Color.blue} />,
    url: 'Marks',
  },
  {
    title: 'Предметы',
    icon: <Subject color={Color.blue} />,
    url: 'Attendance',
  },
]
