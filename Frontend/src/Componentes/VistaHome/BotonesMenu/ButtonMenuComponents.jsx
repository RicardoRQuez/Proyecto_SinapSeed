
import {
    Button,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
  } from '@chakra-ui/react';


const ButtonMenu = ({titleButton,content,titlecontent})=>  {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <>
        <Button onClick={onOpen}  className="btn btn-secondary">{titleButton}</Button>
  
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{titlecontent}</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              {content}
            </ModalBody>
  
            <ModalFooter>
              <Button onClick={onClose} className="btn btn-secondary-2">Salir</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }



export default ButtonMenu;