import './Indicators.scss';

const Indicators = () => {
    return (
        <div className='profile__indicators'>
            <div className='profile__indicators-table'>
                <span></span>
                <span><strong>Попередні показники<br />Лютий, 2023р.</strong></span>
                <span><strong>Введіть поточні показники<br />Березень, 2023р.</strong></span>
                <span><strong>Електроенергія</strong></span>
                <span>102048</span>
                <span><input type='number' /></span>
                <span><strong>Газ</strong></span>
                <span>102048</span>
                <span><input type='number' /></span>
                <span><strong>Водопостачання</strong></span>
                <span>102048</span>
                <span><input type='number' /></span>
                <span><strong>Опалення</strong></span>
                <span>102048</span>
                <span><input type='number' /></span>
            </div>
            <button className='btn-accent'>Відправити дані</button>
        </div>
    );
}

export default Indicators;