import React, { useEffect, useState } from 'react'

import { useFormik } from 'formik'
import { Title } from '../News/NewsStyled'
import { ButtonEven, ButtonNotEven, Container, Day, EmptySubject, Item, ListSubjects, SheduleDay, SheduleWeek, Subject, Time, TitleSubject, TypeOfSubject, WrapperButtons, WrapperButtonsSubject, WrapperSelects, buttonAddCss, buttonIconCss } from './ShedulePageStyled'
import Select from '../../UI/SelectList/Select/Select'
import Edit from '../../UI/Icons/Edit'
import CrossNews from '../../UI/Icons/CrossNews'
import { Department } from '../../../Utils/Types'
import Loader from '../../UI/Loader/Loader'
import Button from '../../UI/Button/Button'

const ShedulePage = () => {
  const [isEven, setIsEven] = useState(false)

  const { values, setFieldValue } = useFormik({
    initialValues: {
      faculties: '',
      department: '',
      group: '',
    },
    onSubmit: () => {},
  })

  const handleChangeGroups = (value = '') => {
    setFieldValue('group', value)
  }

  const handleChangeDepartments = (value = '') => {
    setFieldValue('department', value)
    setFieldValue('group', null)
  }

  const handleChangeFaculties = (value = '') => {
    setFieldValue('faculties', value)
    setFieldValue('department', null)
    setFieldValue('group', null)
  }

  return (
    <Container>
      <Title>Расписание</Title>
      <WrapperSelects>
        <Select
          label='Факультет'
          onChange={(value) => handleChangeFaculties(value)}
          value={values.faculties}
        />
        <Select
          label='Кафедра'
          onChange={(value) => handleChangeDepartments(value)}
          disabled={!(values.faculties)}
          value={values.department}
        />
        <Select
          label='Группа'
          onChange={(value) => handleChangeGroups(value)}
          disabled={!(values.department)}
          value={values.group}
        />
      </WrapperSelects>
      <WrapperButtons>
        <ButtonEven
          isEven={isEven}
          onClick={() => setIsEven(true)}
        >
          Чётная неделя
        </ButtonEven>
        <ButtonNotEven
          isEven={isEven}
          onClick={() => setIsEven(false)}
        >
          Нечётная неделя
        </ButtonNotEven>
      </WrapperButtons>
      <SheduleWeek>
        <SheduleDay>
          <Day>Понедельник</Day>
          <ListSubjects>
            <EmptySubject>
              <Time>8:00 — 9:30</Time>
              <Button
                onClick={() => {}}
                css={buttonAddCss}
              >
                Добавить предмет
              </Button>
            </EmptySubject>
            <EmptySubject>
              <Time>9:50 — 11:20</Time>
              <Button
                onClick={() => {}}
                css={buttonAddCss}
              >
                Добавить предмет
              </Button>
            </EmptySubject>
            <EmptySubject>
              <Time>11:40 — 13:10</Time>
              <Button
                onClick={() => {}}
                css={buttonAddCss}
              >
                Добавить предмет
              </Button>
            </EmptySubject>
            <Subject>
              <Time>13:40 — 15:10</Time>
              <TypeOfSubject>Лекция</TypeOfSubject>
              <TitleSubject>Интеллектуальный анализ данных</TitleSubject>
              <Item>
                <span>Золотарев Владимир Дмитриевич</span>
                <span>ауд. 1213</span>
              </Item>
              <WrapperButtonsSubject>
                <Button css={buttonIconCss}>
                  <Edit />
                </Button>
                <Button css={buttonIconCss}>
                  <CrossNews />
                </Button>
              </WrapperButtonsSubject>
            </Subject>
            <Subject>
              <Time>15:30 — 17:00</Time>
              <TypeOfSubject>Практика</TypeOfSubject>
              <TitleSubject>Построение и оптимизация алгоритмов</TitleSubject>
              <Item>
                <span>Бобров Дмитрий Михайлович</span>
                <span>ауд. 2317</span>
              </Item>
              <WrapperButtonsSubject>
                <Button css={buttonIconCss}>
                  <Edit />
                </Button>
                <Button css={buttonIconCss}>
                  <CrossNews />
                </Button>
              </WrapperButtonsSubject>
            </Subject>
            <Subject>
              <Time>17:20 — 18:50</Time>
              <TypeOfSubject>Лекция</TypeOfSubject>
              <TitleSubject>Параллельные вычисления</TitleSubject>
              <Item>
                <span>Антонова Валерия Михайловна</span>
                <span>ауд. 1325</span>
              </Item>
              <WrapperButtonsSubject>
                <Button css={buttonIconCss}>
                  <Edit />
                </Button>
                <Button css={buttonIconCss}>
                  <CrossNews />
                </Button>
              </WrapperButtonsSubject>
            </Subject>
            <EmptySubject>
              <Time>19:05 — 20:35</Time>
              <Button
                onClick={() => {}}
                css={buttonAddCss}
              >
                Добавить предмет
              </Button>
            </EmptySubject>
            <EmptySubject>
              <Time>20:50 — 22:20</Time>
              <Button
                onClick={() => {}}
                css={buttonAddCss}
              >
                Добавить предмет
              </Button>
            </EmptySubject>
          </ListSubjects>
        </SheduleDay>
        <SheduleDay>
          <Day>Вторник</Day>
          <ListSubjects>
            <Subject>
              <Time>08:00 — 09:30</Time>
              <TypeOfSubject>Практика</TypeOfSubject>
              <TitleSubject>Интеллектуальный анализ данных</TitleSubject>
              <Item>
                <span>Золотарев Владимир Дмитриевич</span>
                <span>ауд. 2213</span>
              </Item>
              <WrapperButtonsSubject>
                <Button css={buttonIconCss}>
                  <Edit />
                </Button>
                <Button css={buttonIconCss}>
                  <CrossNews />
                </Button>
              </WrapperButtonsSubject>
            </Subject>
            <Subject>
              <Time>9:50 — 11:20</Time>
              <TypeOfSubject>Лекция</TypeOfSubject>
              <TitleSubject>Технология разработки программного обеспечения</TitleSubject>
              <Item>
                <span>Афонина Светлана Юрьевна</span>
                <span>ауд. 1237</span>
              </Item>
              <WrapperButtonsSubject>
                <Button css={buttonIconCss}>
                  <Edit />
                </Button>
                <Button css={buttonIconCss}>
                  <CrossNews />
                </Button>
              </WrapperButtonsSubject>
            </Subject>
            <Subject>
              <Time>11:40 — 13:10</Time>
              <TypeOfSubject>Лекция</TypeOfSubject>
              <TitleSubject>Построение и оптимизация алгоритмов</TitleSubject>
              <Item>
                <span>Бобров Дмитрий Михайлович</span>
                <span>ауд. 1214</span>
              </Item>
              <WrapperButtonsSubject>
                <Button css={buttonIconCss}>
                  <Edit />
                </Button>
                <Button css={buttonIconCss}>
                  <CrossNews />
                </Button>
              </WrapperButtonsSubject>
            </Subject>
            <Subject>
              <Time>13:40 — 15:10</Time>
              <TypeOfSubject>Практика</TypeOfSubject>
              <TitleSubject>Управление проектированием информационных систем</TitleSubject>
              <Item>
                <span>Кузнецов Антон Сергеевич</span>
                <span>ауд. 1412</span>
              </Item>
              <WrapperButtonsSubject>
                <Button css={buttonIconCss}>
                  <Edit />
                </Button>
                <Button css={buttonIconCss}>
                  <CrossNews />
                </Button>
              </WrapperButtonsSubject>
            </Subject>
            <EmptySubject>
              <Time>15:30 — 17:00</Time>
              <Button
                onClick={() => {}}
                css={buttonAddCss}
              >
                Добавить предмет
              </Button>
            </EmptySubject>
            <EmptySubject>
              <Time>17:20 — 18:50</Time>
              <Button
                onClick={() => {}}
                css={buttonAddCss}
              >
                Добавить предмет
              </Button>
            </EmptySubject>
            <EmptySubject>
              <Time>19:05 — 20:35</Time>
              <Button
                onClick={() => {}}
                css={buttonAddCss}
              >
                Добавить предмет
              </Button>
            </EmptySubject>
            <EmptySubject>
              <Time>20:50 — 22:20</Time>
              <Button
                onClick={() => {}}
                css={buttonAddCss}
              >
                Добавить предмет
              </Button>
            </EmptySubject>
          </ListSubjects>
        </SheduleDay>
        <SheduleDay>
          <Day>Среда</Day>
          <ListSubjects>
            <EmptySubject>
              <Time>8:00 — 9:30</Time>
              <Button
                onClick={() => {}}
                css={buttonAddCss}
              >
                Добавить предмет
              </Button>
            </EmptySubject>
            <Subject>
              <Time>9:50 — 11:20</Time>
              <TypeOfSubject>Лекция</TypeOfSubject>
              <TitleSubject>Технология разработки программного обеспечения</TitleSubject>
              <Item>
                <span>Афонина Светлана Юрьевна</span>
                <span>ауд. 1237</span>
              </Item>
              <WrapperButtonsSubject>
                <Button css={buttonIconCss}>
                  <Edit />
                </Button>
                <Button css={buttonIconCss}>
                  <CrossNews />
                </Button>
              </WrapperButtonsSubject>
            </Subject>
            <Subject>
              <Time>11:40 — 13:10</Time>
              <TypeOfSubject>Лекция</TypeOfSubject>
              <TitleSubject>Построение и оптимизация алгоритмов</TitleSubject>
              <Item>
                <span>Бобров Дмитрий Михайлович</span>
                <span>ауд. 1214</span>
              </Item>
              <WrapperButtonsSubject>
                <Button css={buttonIconCss}>
                  <Edit />
                </Button>
                <Button css={buttonIconCss}>
                  <CrossNews />
                </Button>
              </WrapperButtonsSubject>
            </Subject>
            <Subject>
              <Time>13:40 — 15:10</Time>
              <TypeOfSubject>Практика</TypeOfSubject>
              <TitleSubject>Управление проектированием информационных систем</TitleSubject>
              <Item>
                <span>Кузнецов Антон Сергеевич</span>
                <span>ауд. 1412</span>
              </Item>
              <WrapperButtonsSubject>
                <Button css={buttonIconCss}>
                  <Edit />
                </Button>
                <Button css={buttonIconCss}>
                  <CrossNews />
                </Button>
              </WrapperButtonsSubject>
            </Subject>
            <EmptySubject>
              <Time>15:30 — 17:00</Time>
              <Button
                onClick={() => {}}
                css={buttonAddCss}
              >
                Добавить предмет
              </Button>
            </EmptySubject>
            <EmptySubject>
              <Time>17:20 — 18:50</Time>
              <Button
                onClick={() => {}}
                css={buttonAddCss}
              >
                Добавить предмет
              </Button>
            </EmptySubject>
            <EmptySubject>
              <Time>19:05 — 20:35</Time>
              <Button
                onClick={() => {}}
                css={buttonAddCss}
              >
                Добавить предмет
              </Button>
            </EmptySubject>
            <EmptySubject>
              <Time>20:50 — 22:20</Time>
              <Button
                onClick={() => {}}
                css={buttonAddCss}
              >
                Добавить предмет
              </Button>
            </EmptySubject>
          </ListSubjects>
        </SheduleDay>
        <SheduleDay>
          <Day>Четверг</Day>
          <ListSubjects>
            <EmptySubject>
              <Time>8:00 — 9:30</Time>
              <Button
                onClick={() => {}}
                css={buttonAddCss}
              >
                Добавить предмет
              </Button>
            </EmptySubject>
            <EmptySubject>
              <Time>09:50 — 11:20</Time>
              <Button
                onClick={() => {}}
                css={buttonAddCss}
              >
                Добавить предмет
              </Button>
            </EmptySubject>
            <EmptySubject>
              <Time>11:40 — 13:10</Time>
              <Button
                onClick={() => {}}
                css={buttonAddCss}
              >
                Добавить предмет
              </Button>
            </EmptySubject>
            <EmptySubject>
              <Time>13:40 — 15:10</Time>
              <Button
                onClick={() => {}}
                css={buttonAddCss}
              >
                Добавить предмет
              </Button>
            </EmptySubject>
            <EmptySubject>
              <Time>15:30 — 17:00</Time>
              <Button
                onClick={() => {}}
                css={buttonAddCss}
              >
                Добавить предмет
              </Button>
            </EmptySubject>
            <EmptySubject>
              <Time>17:20 — 18:50</Time>
              <Button
                onClick={() => {}}
                css={buttonAddCss}
              >
                Добавить предмет
              </Button>
            </EmptySubject>
            <EmptySubject>
              <Time>19:05 — 20:35</Time>
              <Button
                onClick={() => {}}
                css={buttonAddCss}
              >
                Добавить предмет
              </Button>
            </EmptySubject>
            <EmptySubject>
              <Time>20:50 — 22:20</Time>
              <Button
                onClick={() => {}}
                css={buttonAddCss}
              >
                Добавить предмет
              </Button>
            </EmptySubject>
          </ListSubjects>
        </SheduleDay>
        <SheduleDay>
          <Day>Пятница</Day>
          <ListSubjects>
            <EmptySubject>
              <Time>8:00 — 9:30</Time>
              <Button
                onClick={() => {}}
                css={buttonAddCss}
              >
                Добавить предмет
              </Button>
            </EmptySubject>
            <EmptySubject>
              <Time>9:50 — 11:20</Time>
              <Button
                onClick={() => {}}
                css={buttonAddCss}
              >
                Добавить предмет
              </Button>
            </EmptySubject>
            <Subject>
              <Time>11:40 — 13:10</Time>
              <TypeOfSubject>Лекция</TypeOfSubject>
              <TitleSubject>Доверенный искусственный интеллект</TitleSubject>
              <Item>
                <span>Петров Павел Евгеньевич</span>
                <span>ауд. 3412</span>
              </Item>
              <WrapperButtonsSubject>
                <Button css={buttonIconCss}>
                  <Edit />
                </Button>
                <Button css={buttonIconCss}>
                  <CrossNews />
                </Button>
              </WrapperButtonsSubject>
            </Subject>
            <Subject>
              <Time>13:40 — 15:10</Time>
              <TypeOfSubject>Практика</TypeOfSubject>
              <TitleSubject>Аналитическая обработка данных</TitleSubject>
              <Item>
                <span>Михайлова Екатерина Викторовна</span>
                <span>ауд. 1320</span>
              </Item>
              <WrapperButtonsSubject>
                <Button css={buttonIconCss}>
                  <Edit />
                </Button>
                <Button css={buttonIconCss}>
                  <CrossNews />
                </Button>
              </WrapperButtonsSubject>
            </Subject>
            <EmptySubject>
              <Time>15:30 — 17:00</Time>
              <Button
                onClick={() => {}}
                css={buttonAddCss}
              >
                Добавить предмет
              </Button>
            </EmptySubject>
            <Subject>
              <Time>17:20 — 18:50</Time>
              <TypeOfSubject>Практика</TypeOfSubject>
              <TitleSubject>Параллельные вычисления</TitleSubject>
              <Item>
                <span>Антонова Валерия Михайловна</span>
                <span>ауд. 1325</span>
              </Item>
              <WrapperButtonsSubject>
                <Button css={buttonIconCss}>
                  <Edit />
                </Button>
                <Button css={buttonIconCss}>
                  <CrossNews />
                </Button>
              </WrapperButtonsSubject>
            </Subject>
            <EmptySubject>
              <Time>19:05 — 20:35</Time>
              <Button
                onClick={() => {}}
                css={buttonAddCss}
              >
                Добавить предмет
              </Button>
            </EmptySubject>
            <EmptySubject>
              <Time>20:50 — 22:20</Time>
              <Button
                onClick={() => {}}
                css={buttonAddCss}
              >
                Добавить предмет
              </Button>
            </EmptySubject>
          </ListSubjects>
        </SheduleDay>
        <SheduleDay>
          <Day>Суббота</Day>
          <ListSubjects>
            <EmptySubject>
              <Time>8:00 — 9:30</Time>
              <Button
                onClick={() => {}}
                css={buttonAddCss}
              >
                Добавить предмет
              </Button>
            </EmptySubject>
            <EmptySubject>
              <Time>09:50 — 11:20</Time>
              <Button
                onClick={() => {}}
                css={buttonAddCss}
              >
                Добавить предмет
              </Button>
            </EmptySubject>
            <Subject>
              <Time>11:40 — 13:10</Time>
              <TypeOfSubject>Лекция</TypeOfSubject>
              <TitleSubject>Иностранный язык</TitleSubject>
              <Item>
                <span>Смирнов Андрей Никитич</span>
                <span>ауд. 3112</span>
              </Item>
              <WrapperButtonsSubject>
                <Button css={buttonIconCss}>
                  <Edit />
                </Button>
                <Button css={buttonIconCss}>
                  <CrossNews />
                </Button>
              </WrapperButtonsSubject>
            </Subject>
            <EmptySubject>
              <Time>13:40 — 15:10</Time>
              <Button
                onClick={() => {}}
                css={buttonAddCss}
              >
                Добавить предмет
              </Button>
            </EmptySubject>
            <EmptySubject>
              <Time>15:30 — 17:00</Time>
              <Button
                onClick={() => {}}
                css={buttonAddCss}
              >
                Добавить предмет
              </Button>
            </EmptySubject>
            <EmptySubject>
              <Time>17:20 — 18:50</Time>
              <Button
                onClick={() => {}}
                css={buttonAddCss}
              >
                Добавить предмет
              </Button>
            </EmptySubject>
            <EmptySubject>
              <Time>19:05 — 20:35</Time>
              <Button
                onClick={() => {}}
                css={buttonAddCss}
              >
                Добавить предмет
              </Button>
            </EmptySubject>
            <EmptySubject>
              <Time>20:50 — 22:20</Time>
              <Button
                onClick={() => {}}
                css={buttonAddCss}
              >
                Добавить предмет
              </Button>
            </EmptySubject>
          </ListSubjects>
        </SheduleDay>
      </SheduleWeek>
    </Container>
  )
}

export default ShedulePage
