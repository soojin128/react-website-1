import React from 'react'
import Carditem from './Carditem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
      <h1>다양한 여행지를 확인해보세요!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <Carditem
            src='images/img-9.jpg'
            text='아마존 정글 깊은 곳에 숨겨진 폭포 탐험'
            label='Adventure'
            path='/services'
            />
              <Carditem
            src='images/img-2.jpg'
            text='프라이빗 크루즈로 발리 섬 여행'
            label='Luxury'
            path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <Carditem
            src='images/img-3.jpg'
            text='대서양에서 미지의 바다를 향해 항해'
            label='Mystery'
            path='/services'
            />
              <Carditem
            src='images/img-4.jpg'
            text='히말라야 산 꼭대기에서 축구를!?'
            label='Adventure'
            path='/services'
            />
            <Carditem
            src='images/img-8.jpg'
            text='사하라 사막에서 가이드 낙타 투어'
            label='Adrenaline'
            path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
