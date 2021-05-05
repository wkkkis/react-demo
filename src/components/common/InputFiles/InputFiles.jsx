import React from "react";
import "./inputFiles.css";
import add from "../../../assets/images/add.svg"

const InputFiles = ({handleSubmit}) => {

    let inputs = document.querySelectorAll('.input__file');
    Array.prototype.forEach.call(inputs, function (input) {
        let label = input.nextElementSibling,
            labelVal = label.querySelector('.input__file-button-text').innerText;

        input.addEventListener('change', function (e) {
            let countFiles = '';
            if (this.files && this.files.length >= 1)
                countFiles = this.files.length;

            if (countFiles)
                label.querySelector('.input__file-button-text').innerText = 'Выбрано файлов: ' + countFiles;
            else
                label.querySelector('.input__file-button-text').innerText = labelVal;
        });
    });

    return (
        <>
            <div className="input__wrapper">
                <input name="file" type="file" id="input__file" className="input input__file" onChange={handleSubmit} multiple/>
                <label htmlFor="input__file" className="input__file-button">
                    <span className="input__file-icon-wrapper">
                        <img className="input__file-icon" src={add} width="25"/>
                        </span>
                    <span className="input__file-button-text">Выберите файл</span>
                </label>
            </div>
        </>
    )
}

export default InputFiles