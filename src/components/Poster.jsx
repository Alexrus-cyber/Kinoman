import { useState } from "react";
import React from "react";

export const Poster = () => {
    return (
        <div className={'Афиша'}>
            <div className={'Контейнер'}>
                <div className={'Афиша'}>
                    <p></p>
                </div>
                <div className={'Select'}>
                    <div className={''}></div>
                    <div className={''}></div>
                    <div className={''}></div>
                </div>
                <div className={'Постеры'}>
                    <div className={'Итем'}>
                        <div className={'Контейнер для итема'}>
                            <div className={'Картинка'}>

                            </div>
                            <div className={'Текст и кнопка'}>
                                <div className={'Для текста'}>
                                    <div className={'Заголовок текста'}></div>
                                    <div className={'текст'}></div>
                                </div>
                                <div className={'Кнопка'}></div>
                            </div>
                        </div>
                    </div>
                    <div className={''}></div>
                </div>
            </div>
        </div>
    )
}