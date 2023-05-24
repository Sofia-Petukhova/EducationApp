import React, { useState, ChangeEvent, useRef } from 'react'
import { BoxButtons, InputUploader, WrapperPlus, WrapperUploadImage, buttonCss, deleteButtonCss } from './ImageUploaderStyled'
import Plus from '../../Icons/Plus'
import Button from '../../Button/Button'

type ImageUploaderProps = {
  onUpload: (formData: File) => void;
  imageUrl?: string | undefined,
  isEditDisable: boolean,
};

const ImageUploader: React.FC<ImageUploaderProps> = ({
  onUpload,
  imageUrl = '',
  isEditDisable,
}) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const inputFileRef = useRef<HTMLInputElement>(null)

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    setSelectedImage(file || null)
    if (file) {
      onUpload(file)
    }
  }

  const handleButtonClick = () => {
    if (inputFileRef.current) {
      inputFileRef.current.click()
    }
  }

  const handleButtonDelete = () => {
    setSelectedImage(null)
  }

  return (
    <WrapperUploadImage>
      <WrapperPlus>
        <Plus />
      </WrapperPlus>
      {selectedImage || imageUrl ? (
        <img src={selectedImage ? URL.createObjectURL(selectedImage) : imageUrl} alt='fdsfsd' />
      ) : null}
      {!isEditDisable && <InputUploader type='file' accept='image/*' onChange={handleImageChange} ref={inputFileRef} />}
      <BoxButtons>
        {!isEditDisable && (
        <Button
          onClick={handleButtonClick}
          css={buttonCss}
        >
          Добавить фото
        </Button>
        )}
        {selectedImage && !isEditDisable && (
        <Button
          onClick={handleButtonDelete}
          css={deleteButtonCss}
        >
          Удалить
        </Button>
        )}
      </BoxButtons>
    </WrapperUploadImage>
  )
}

export default ImageUploader
