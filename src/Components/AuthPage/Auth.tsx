import React from 'react'
import { Formik, FormikProps } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import {
  BoxForm,
  Container,
  Subtitle,
  Title,
  WrapperForm,
  WrapperLoader,
  WrapperLogo,
  buttonCss,
  inputCss,
  lastInputCss,
} from './AuthStyled'
import LogoEtuFlow from '../UI/Icons/LogoEtuFlow'
import Input from '../UI/Inputs/Input/Input'
import { emailRegExp, passwordRegExp } from '../../Utils/regExp'
import Button from '../UI/Button/Button'
import Loader from '../UI/Loader/Loader'

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .matches(emailRegExp, 'Некорректный адрес электронной почты')
    .required('Обязательное поле'),
  password: Yup.string()
    .required('Обязательное поле'),
  // .matches(
  //   passwordRegExp,
  //   'Пример пароля: Test1234',
  // ),
})

type AuthFormProps = {
  handelAuth: (data: { password: string, email: string }) => void,
}

type AuthValues = {
  email: string,
  password: string,
}

const initialValues: AuthValues = {
  email: '',
  password: '',
}

const AuthForm: React.FC<AuthFormProps & FormikProps<AuthValues>> = ({
  values,
  handleChange,
  handleBlur,
  touched,
  errors,
  handelAuth,
}) => (
  <WrapperForm>
    <Title>Добро пожаловать <br /> в EtuFlow!</Title>
    <Input
      label='Email'
      placeholder='Введите email'
      value={values.email}
      type='email'
      name='email'
      onChange={handleChange}
      onBlur={handleBlur}
      error={touched.email && errors.email}
      css={inputCss}
    />
    <Input
      label='Пароль'
      placeholder='Введите пароль'
      value={values.password}
      type='password'
      name='password'
      onChange={handleChange}
      onBlur={handleBlur}
      error={touched.password && errors.password}
      css={lastInputCss}
    />
    <Button
      disabled={!!(errors.email && errors.password)}
      onClick={() => handelAuth(values)}
      css={buttonCss}
    >
      Войти
    </Button>
    <Subtitle>
      Забыли пароль?
    </Subtitle>
  </WrapperForm>
)

const Auth: React.FC = () => {
  const navigate = useNavigate()

  return (
    <Container>
      <BoxForm>
        <WrapperLogo>
          <LogoEtuFlow />
        </WrapperLogo>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={() => {}}
        >
          {(formikProps) => (
            <AuthForm
              {...formikProps}
              handelAuth={() => {}}
            />
          )}
        </Formik>
      </BoxForm>
    </Container>
  )
}

export default Auth
