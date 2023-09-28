import './styled-modal.styles.css'
import Modal from 'react-modal'
import { useUserContext } from '@/contexts/user.context'


type ModalProps = {
    modalOpen: boolean,
    toggleModal: () => void,
    active: boolean,
}

function StyledModal({ modalOpen, toggleModal, active }: ModalProps) {
  
  const { appElement } = useUserContext();
  
  return (
    <Modal 
        isOpen={modalOpen}
        onRequestClose={toggleModal}
        appElement={appElement}
        contentLabel='pop-up with email address and phone number'
        closeTimeoutMS={400}
        className={`modal-works ${active} h-2/3 w-full bg-primaryBg border-solid border-4 border-accentBlue flex flex-col items-center justify-evenly`}
        >
          <div className='text-center'>
            <h4 className='text-primaryFont text-2xl md:text-4xl'>Email:</h4>
            <p className=' text-accentGreen text-xl md:text-3xl'>paulsissonsemail@gmail.com</p>
            <button className='p-1 w-1/8 border-solid border-y-[1px] border-accentOrange'  onClick={() => navigator.clipboard.writeText('paulsissonsemail@gmail.com')}>copy</button>
          </div>
          <div className='text-center'>
            <h4 className='text-primaryFont text-2xl md:text-4xl'>Phone:</h4>
            <p className=' text-accentGreen text-xl md:text-3xl'>205-520-8659</p>
            <button className='p-1 w-1/8 border-solid border-y-[1px] border-accentOrange' onClick={() => navigator.clipboard.writeText('205-520-8659')}>copy</button>

          </div>
          <button onClick={toggleModal} className=' p-2 w-1/2 text-3xl text-accentOrange'><span className='text-primaryFont text-3xl md:text-4xl'>&#60;</span>/close<span className='text-primaryFont text-3xl md:text-4xl'>&#62;</span></button>
        </Modal>
  )
}

export default StyledModal