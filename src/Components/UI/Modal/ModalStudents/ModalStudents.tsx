import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Checkbox } from 'antd'
import Modal from '../ModalDefault/Modal'
import { Box, Container, Title, WrapperButtons, WrapperCheckbox, WrapperInputs, WrapperItem } from './ModalStudentsStyled'
import Button from '../../Button/Button'
import InputMini from '../../Inputs/InputMini/InputMini'
import { User } from '../../../../Utils/Types'

type ModalStudentsProps = {
  open: boolean,
  onClose: () => void,
  title: string,
  onSave: (values: InitialValueStudentsProps, isEdit: boolean) => void,
  editStudent: User | null,
}

export type InitialValueStudentsProps = {
  last_name: string,
  first_name: string,
  middle_name: string,
  coin_balance: string,
  email: string,
  user_type: string,
  phone_number: string,
}

const validationSchema = Yup.object().shape({
  last_name: Yup.string()
    .required('Обязательное поле'),
  first_name: Yup.string()
    .required('Обязательное поле'),
  middle_name: Yup.string()
    .required('Обязательное поле'),
  coin_balance: Yup.number()
    .required('Обязательное поле'),
  email: Yup.string()
    .required('Обязательное поле'),
})

const ModalStudents: React.FC<ModalStudentsProps> = ({
  open,
  onClose,
  title,
  onSave,
  editStudent,
}) => {
  const initialValues: InitialValueStudentsProps = {
    last_name: editStudent?.last_name || '',
    first_name: editStudent?.first_name || '',
    middle_name: editStudent?.middle_name || '',
    coin_balance: `${editStudent?.coin_balance}` || '',
    email: editStudent?.email || '',
    user_type: editStudent?.user_type || '',
    phone_number: editStudent?.phone_number || '',
  }

  const {
    handleChange,
    setFieldValue,
    values,
    handleBlur,
    touched,
    errors,
  } = useFormik({
    enableReinitialize: true,
    initialValues,
    onSubmit: () => {},
    validationSchema,
  })

  return (
    <Modal
      onClose={onClose}
      open={open}
    >
      <Container>
        <Title>
          {editStudent ? 'Редактировать студента' : title}
        </Title>
        <WrapperInputs>
          <WrapperItem>
            <InputMini
              label='Фамилия'
              name='last_name'
              placeholder='Введите фамилию'
              value={values.last_name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.last_name && errors.last_name}
            />
            <InputMini
              label='Имя'
              name='first_name'
              placeholder='Введите имя'
              value={values.first_name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.first_name && errors.first_name}
            />
            <InputMini
              label='Отчество'
              name='middle_name'
              placeholder='Введите отчество'
              value={values.middle_name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.middle_name && errors.middle_name}
            />
            <InputMini
              label='Лэтикоины'
              name='coin_balance'
              type='number'
              placeholder='Введите количество'
              value={values.coin_balance}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.coin_balance && errors.coin_balance}
            />
          </WrapperItem>
          <WrapperItem>
            <InputMini
              label='Электронная почта'
              name='email'
              type='email'
              placeholder='Введите почту'
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email && errors.email}
            />
            <InputMini
              label='Номер телефона'
              name='phone_number'
              placeholder='Введите телефон'
              value={values.phone_number}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.phone_number && errors.phone_number}
            />
            <WrapperCheckbox>
              <Checkbox
                checked={(values.user_type === 'lead')}
                onChange={(value) => setFieldValue('user_type', value ? 'lead' : 'student')}
              >
                Назначить старостой
              </Checkbox>
            </WrapperCheckbox>
          </WrapperItem>
        </WrapperInputs>
        <Box>
          <WrapperButtons>
            <Button
              isCancel
              onClick={onClose}
            >
              Отменить
            </Button>
            <Button
              onClick={() => onSave(values, !!(editStudent))}
            >
              Сохранить
            </Button>
          </WrapperButtons>
        </Box>
      </Container>
    </Modal>
  )
}

export default ModalStudents
