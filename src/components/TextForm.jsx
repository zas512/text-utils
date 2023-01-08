import React, { useState } from 'react'

export default function TexthtmlForm() {

    const handleUpText = (e) => {
        e.preventDefault();
        let newText = text.toUpperCase()
        setText(newText)
    }

    const handleLowText = (e) => {
        e.preventDefault();
        let newText = text.toLowerCase()
        setText(newText)
    }

    const handleCapText = (e) => {
        e.preventDefault();
        let newText = text[0].toUpperCase() + text.substring(1)
        setText(newText)
    }

    const handleTcText = (e) => {
        e.preventDefault();
        const words = text.split(' ');
        const titleWords = [];
        for (const word of words) {
            const firstLetter = word.slice(0, 1).toLocaleUpperCase();
            const rest = word.slice(1);
            titleWords.push(`${firstLetter}${rest}`);
        }
        const result = titleWords.join(' ');
        setText(result)
    }

    const remSpaces = (e) => {
        e.preventDefault();
        let newText = text.replace(/\s+/g, ' ').trim()
        setText(newText)
    }

    const DelText = (e) => {
        e.preventDefault();
        setText('')
    }

    const CopyText = (e) => {
        e.preventDefault();
        let cpyText = document.getElementById('text-area')
        cpyText.select()
        navigator.clipboard.writeText(cpyText.value)
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState('')

    return (
        <div className='w-full'>
            <form className="flex w-full justify-center">
                <div className="flex flex-col w-full items-center">
                    <div className="mb-5">
                        <span className="block mt-5 text-textD dark:text-textL text-slate-100 md:text-right cursor-default md:mb-0 w-[100%] font-semibold text-4xl">
                            Input text to Modify
                        </span>
                    </div>

                    <div className="relative w-[75%] mb-4">

                        <textarea className='block p-2.5 w-full text-xl   text-textD dark:text-textL rounded-lg border bg-light2 dark:bg-dark2 dark:bg_dark2 border-borderColor dark:border-borderColorL shadow-lg' rows={10} type="text" id='text-area' placeholder="Input Text Here..." value={text} onChange={handleOnChange} />

                        <button className="absolute w-[40px] bg-light2 dark:bg-dark2 hover:bg-light1 hover:dark:bg-dark1  text-textD dark:text-textL font-semibold py-1 border border-borderColor dark:border-borderColorL rounded-xl sm:top-[-45px] sm:right-[5px] right-[5px] top-[330px]" onClick={(e) => { CopyText(e) }}>
                            <i className='fa fa-copy'></i>
                        </button>

                    </div>
                    <div className='w-[75%] mb-2 flex justify-center md:flex-row flex-wrap items-center'>

                        <button className="w-[200px] m-3 bg-light2 dark:bg-dark2 hover:bg-light1 hover:dark:bg-dark1  text-textD dark:text-textL font-semibold py-2 px-4 border shadow-lg border-borderColor dark:border-borderColorL rounded" onClick={(e) => { handleUpText(e) }}>
                            Upper Case
                        </button>

                        <button className="w-[200px] m-3 bg-light2 dark:bg-dark2 hover:bg-light1 hover:dark:bg-dark1  text-textD dark:text-textL font-semibold py-2 px-4 border shadow-lg border-borderColor dark:border-borderColorL rounded" onClick={(e) => { handleLowText(e) }}>
                            Lower Case
                        </button>

                        <button className="w-[200px] m-3 bg-light2 dark:bg-dark2 hover:bg-light1 hover:dark:bg-dark1  text-textD dark:text-textL font-semibold py-2 px-4 border shadow-lg border-borderColor dark:border-borderColorL rounded" onClick={(e) => { handleCapText(e) }}>
                            Capitalize Text
                        </button>

                        <button className="w-[200px] m-3 bg-light2 dark:bg-dark2 hover:bg-light1 hover:dark:bg-dark1  text-textD dark:text-textL font-semibold py-2 px-4 border shadow-lg border-borderColor dark:border-borderColorL rounded" onClick={(e) => { handleTcText(e) }}>
                            Title Case
                        </button>

                        <button className="w-[200px] m-3 bg-light2 dark:bg-dark2 hover:bg-light1 hover:dark:bg-dark1  text-textD dark:text-textL font-semibold py-2 px-4 border shadow-lg border-borderColor dark:border-borderColorL rounded" onClick={(e) => { remSpaces(e) }}>
                            Remove Spaces
                        </button>

                        <button className="w-[200px] m-3 bg-light2 dark:bg-dark2 hover:bg-light1 hover:dark:bg-dark1  text-textD dark:text-textL font-semibold py-2 px-4 border shadow-lg border-borderColor dark:border-borderColorL rounded" onClick={(e) => { DelText(e) }}>
                            Delete Text
                        </button>

                    </div>
                </div>
            </form>

            <div className='flex flex-col items-center'>

                <h1 className='block   text-textD dark:text-textL mb-5 font-semibold text-4xl'>Text Summary</h1>

                <div className='flex md:space-x-2 items-center shadow-lg bg-light1 dark:bg-dark1 border-borderColor dark:border-borderColorL rounded-lg border py-2 px-3 md:flex-row flex-col mb-5'>

                    <p className='text-xl p-1   text-textD dark:text-textL'>Total Characters : <span className='font-semibold'>{text.trim().length}</span></p>

                    <p className='text-xl p-1   text-textD dark:text-textL'>Total Words : <span className='font-semibold'>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length}</span></p>

                    <p className='text-xl p-1   text-textD dark:text-textL'>Time to Read : <span className='font-semibold'>{0.008 * text.split(' ').filter((element) => { return element.length !== 0 }).length} Mins</span></p>

                </div>
            </div>
        </div>
    )
}
