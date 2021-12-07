import { createStore } from 'redux'

const INITIAL_STATE = {
    activeLesson: {},
    activeModule: {},
    modules: [
        {
            id: 1,
            title: "1º ANO A",
            lessons: [
                { 
                    id: 1, 
                    title: "Penicilina",
                    link: "https://drive.google.com/file/d/1c1PMwZCEGu7f-MmnT2dKOwj16E9FMQ1q/preview"
                },
                { 
                    id: 2, 
                    title: "Heroina",
                    link: "https://drive.google.com/file/d/1TIuDoiiE3F-DQoOo3asxR6YvDTonJIuZ/preview"
                }
            ]
        },
        {
            id: 2,
            title: "1º ANO B",
            lessons: [
                {
                    id: 1, 
                    title: "Lean",
                    link: "https://drive.google.com/file/d/16tQMA68AmTyxx0cPI919bzVKwjVRb5Hw/preview"
                },
                { 
                    id: 2, 
                    title: "Krokodil",
                    link: "https://drive.google.com/file/d/1VAYEA3SOSBTG8XIw9WVXZmvzhnuDmijL/preview"
                },
                { 
                    id: 3, 
                    title: "Cafeína",
                    link: "https://drive.google.com/file/d/1WJBiGxcR0ERrPbXSWeQzxtm_xpRD4euQ/preview"
                },
                { 
                    id: 3, 
                    title: "Taurina",
                    link: "https://drive.google.com/file/d/1en9LF9wnpPi8oKWTnXLO_YmeKd1FE-Vb/preview"
                }
            ]
        },
        {
            id: 3,
            title: "1º ANO C",
            lessons: [
                {
                    id: 1, 
                    title: "Krokodil",
                    link: "https://drive.google.com/file/d/1HyNm7NH39GIYYBi3l1fT0OKyDpFzFqye/preview"
                },
                { 
                    id: 2, 
                    title: "THC",
                    link: "https://drive.google.com/file/d/1c80gPq6b5xtpD9bjB0jbbBOXG_1vGzQr/preview"
                },
                { 
                    id: 3, 
                    title: "Cafeína",
                    link: "https://drive.google.com/file/d/1uANLi32ClyU1AwKQFSACRgS7MfgS9bB4/preview"
                },
                {
                    id: 4, 
                    title: "Skank",
                    link: "https://drive.google.com/file/d/1Qxwzf4vCgJUOgy8PBf4CTFrmJNR90zaI/preview"
                }
            ]
        }
    ]
}

function reducer(state = INITIAL_STATE , action) {
    if(action.type == 'TOGGLE_LESSON') {
        return { ...state, 
            activeLesson: action.lesson,
            activeModule: action.module
        }
    }

    return state
}

const store = createStore(reducer)

export default store