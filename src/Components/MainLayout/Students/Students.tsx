import React, { ChangeEvent, useEffect, useState } from 'react'
import { Tooltip } from 'antd'
import { useFormik } from 'formik'
import Loader from '../../UI/Loader/Loader'
import { Container, HeaderTable, InputFile, Title, TitleHeader, UserInfo, UserList, WrapperButtons, WrapperIcons, WrapperSelects, WrapperTitle, WrapperTooltip, WrapperUser, buttonCss, buttonExportCss } from './StudentsStyled'
import Button from '../../UI/Button/Button'
import Select from '../../UI/SelectList/Select/Select'
import { TitlesHeader, getUserName } from './Utils'
import Edit from '../../UI/Icons/Edit'
import Cross from '../../UI/Icons/CrossNews'
import { Color } from '../../../Utils/Constans'
import ModalCheck from '../../UI/Modal/ModalCheck/ModalCheck'
import Info from '../../UI/Icons/Info'
import { Department, User } from '../../../Utils/Types'
import ModalStudents, { InitialValueStudentsProps } from '../../UI/Modal/ModalStudents/ModalStudents'

const Students = () => {
  const [isOpenAdd, setIsOpenAdd] = useState(false)
  const [isOpenAddCheck, setIsOpenAddCheck] = useState(false)
  const [editStudent, setEditStudent] = useState<User | null>(null)

  const { values, setFieldValue } = useFormik({
    initialValues: {
      faculties: '',
      department: '',
      group: '',
    },
    onSubmit: () => {},
  })

  const OpenModalAdd = () => {
    setIsOpenAdd(true)
  }

  const CloseModalAdd = () => {
    setIsOpenAdd(false)
  }

  const CloseModalAddCheck = () => {
    setIsOpenAddCheck(false)
  }

  const AddStudent = (valuesNewStudent: InitialValueStudentsProps, isEdit = false) => {
    if (isEdit) {
      setIsOpenAdd(false)
      return
    }
    setIsOpenAdd(false)
    setIsOpenAddCheck(true)
  }

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

  const handleClickEdit = (user: User) => {
    setEditStudent(user)
    setIsOpenAdd(true)
  }

  const addFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const data = new FormData()
      data.append('file', file)
    }
  }
  const users: string[] = ['', '', '']
  return (
    <>
      <Container>
        <WrapperTitle>
          <Title>Студенты</Title>
          <WrapperButtons>
            <InputFile type='file' accept='*' onChange={addFile} />
            <Button
              isCancel
              css={buttonExportCss}
              onClick={() => {}}
            >
              Экспорт из Excel
            </Button>
            <Button
              css={buttonCss}
              onClick={OpenModalAdd}
            >
              Добавить студента
            </Button>
          </WrapperButtons>
        </WrapperTitle>
        <WrapperSelects>
          <Select
            label='Select'
            onChange={() => {}}
          />
        </WrapperSelects>
        <HeaderTable>
          {TitlesHeader.map((title, index) => (
            <TitleHeader
              key={index}
            >
              {title}
            </TitleHeader>
          ))}
        </HeaderTable>
        <UserList>
          {users && users.map((user) => (
            <WrapperUser
              key='1'
              isHead={false}
            >
              <UserInfo>
                UserInfo
              </UserInfo>
              <UserInfo>email</UserInfo>
              <UserInfo>phone</UserInfo>
              <UserInfo>coin_balance</UserInfo>
              <WrapperIcons>
                <Edit
                  color={Color.blue}
                  onClick={() => {}}
                />
                <Cross
                  color={Color.blue}
                  onClick={() => {}}
                />
              </WrapperIcons>
              {user === 'lead' && (
                <Tooltip
                  title='Староста группы'
                >
                  <WrapperTooltip>
                    <Info />
                  </WrapperTooltip>
                </Tooltip>
              )}
            </WrapperUser>
          ))}
        </UserList>
      </Container>
      <ModalStudents
        open={isOpenAdd}
        onClose={() => {
          CloseModalAdd()
          setEditStudent(null)
        }}
        title='Добавить студента'
        onSave={AddStudent}
        editStudent={editStudent}
      />
      <ModalCheck
        open={isOpenAddCheck}
        onClose={CloseModalAddCheck}
        title='Студент добавлен'
        text='Данные о студенте успешно сохранены. Чтобы вернуться обратно на страницу нажмите кнопку ниже.'
      />
    </>
  )
}

export default Students
