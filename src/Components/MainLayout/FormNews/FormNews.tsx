import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useLocation, useNavigate } from 'react-router-dom'
import Dash from '../../UI/Icons/Dash'
import Button from '../../UI/Button/Button'
import { Box,
  Container,
  LastInputCss,
  Text,
  Title,
  Wrapper,
  WrapperForm,
  WrapperIcon,
  WrapperInputImage,
  WrapperInputTitle,
  WrapperTextArea,
  WrapperTitle,
  inputCss,
} from './FormNewsStyled'
import Input from '../../UI/Inputs/Input/Input'
import TextArea from '../../UI/Inputs/TextArea/TextArea'
import ModalDelete from '../../UI/Modal/ModalDelete/ModalDelete'
import ModalCheck from '../../UI/Modal/ModalCheck/ModalCheck'
import ImageUploader from '../../UI/Inputs/ImageUploader/ImageUploader'

type FormNewsValues = {
  title: string,
  coin_reward: string | number,
  content: string,
  image: null | FormData | string,
}

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .min(10, 'Минимум 10 символов')
    .required('Обязательное поле'),
  coin_reward: Yup.number()
    .required('Обязательное поле'),
  content: Yup.string()
    .required('Обязательное поле'),
})

const FormNews: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const queryParams = new URLSearchParams(location.search)
  const id = queryParams.get('id')
  const [isOpenDelete, setIsOpenDelete] = useState(false)
  const [isOpenCheck, setIsOpenCheck] = useState(false)
  const [selectedImage, setSelectedImage] = useState<File | null>(null)

  const editNews = ''
  const initialValues: FormNewsValues = {
    title: '',
    coin_reward: '',
    content: '',
    image: null,
  }

  const formik = useFormik({
    initialValues,
    onSubmit: () => {},
    validationSchema,
  })

  const onSaveNews = () => {
    if (selectedImage && !editNews) {
      const formData = new FormData()
      formData.append('image', selectedImage || formik.values.image)
      formData.append('title', formik.values.title)
      formData.append('content', formik.values.content)
      formData.append('coin_reward', `${formik.values.coin_reward}`)
      formData.append('faculty', '1')
      setTimeout(() => {
        navigate('/EtuFlow/Home/News')
      }, 1000)
    }
    const requestObject = {
      title: formik.values.title,
      coin_reward: formik.values.coin_reward,
      content: formik.values.content,
      faculty: 1,
      id: 0,
    }
    navigate('/EtuFlow/Home/News')
  }
  const handleImageUpload = (file: File) => {
    setSelectedImage(file)
  }

  const OpenModalDelete = () => {
    setIsOpenDelete(true)
  }

  const CloseModalDelete = () => {
    setIsOpenDelete(false)
  }

  const DeleteNews = () => {
    setIsOpenDelete(false)
    setIsOpenCheck(true)
  }

  const CloseModalCheck = () => {
    setIsOpenCheck(false)
    navigate('/EtuFlow/Home/News')
  }
  return (
    <Container>
      <WrapperTitle>
        <Title>Новости</Title>
        <WrapperIcon>
          <Dash />
        </WrapperIcon>
        <Text>{ editNews ? 'Редактировать Новость' : 'Добавить новость'}</Text>
      </WrapperTitle>
      <WrapperForm>
        <Wrapper>
          <WrapperInputImage>
            <ImageUploader
              onUpload={handleImageUpload}
              imageUrl={formik.values.image ? `${formik.values.image}` : ''}
              isEditDisable={!!editNews}
            />
          </WrapperInputImage>
          <WrapperInputTitle>
            <Input
              label='Заголовок'
              placeholder='Введите заголовок статьи'
              value={formik.values.title}
              name='title'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.title && formik.errors.title}
              css={inputCss}
            />
            <Input
              label='Лэтикоины'
              placeholder='Введите количество лэтикоинов'
              value={formik.values.coin_reward}
              name='coin_reward'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.coin_reward && formik.errors.coin_reward}
              css={LastInputCss}
            />
          </WrapperInputTitle>
        </Wrapper>
        <WrapperTextArea>
          <TextArea
            label='Основной текст'
            name='content'
            placeholder='Введите текст статьи'
            value={formik.values.content}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.content && formik.errors.content}
            rows={34}
          />
        </WrapperTextArea>
      </WrapperForm>
      <Box>
        <Button
          isCancel
          onClick={OpenModalDelete}
        >
          Отменить
        </Button>
        <Button
          onClick={onSaveNews}
        >
          Сохранить
        </Button>
      </Box>
      <ModalDelete
        open={isOpenDelete}
        onClose={CloseModalDelete}
        deleted={DeleteNews}
        title='Вы уверены, что хотите удалить новость?'
        text='Впоследствии данные будут утеряны и их восстановление станет невозможным'
      />
      <ModalCheck
        open={isOpenCheck}
        onClose={CloseModalCheck}
        title='Новость удалена'
        text='Новость успешно удалена. Чтобы вернуться на страницу «Новости» нажмите кнопку ниже.'
      />
    </Container>
  )
}

export default FormNews
