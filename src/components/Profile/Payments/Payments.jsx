import './Payments.scss';

const Payments = () => {
    return (
        <div className='profile__payments'>
            <h3>Рахунок за березень 2023р</h3>
            <div className='profile__payments-table'>
                <span><strong>Статті нарахувань</strong></span>
                <span><strong>Об'єм</strong></span>
                <span><strong>Борг на<br />01.02.2023р.</strong></span>
                <span><strong>Оплата у<br />02.2023р.</strong></span>
                <span><strong>Тариф</strong></span>
                <span><strong>Нараховано</strong></span>
                <span><strong>Пільги</strong></span>
                <span><strong>До сплати</strong></span>
                <span><strong>Утримання будинку</strong></span>
                <span>0</span>
                <span>0</span>
                <span>0</span>
                <span>0</span>
                <span>0</span>
                <span>0</span>
                <span>0</span>
                <span><strong>Електроенергія</strong></span>
                <span>0</span>
                <span>0</span>
                <span>0</span>
                <span>0</span>
                <span>0</span>
                <span>0</span>
                <span>0</span>
                <span><strong>Водопостачання</strong></span>
                <span>0</span>
                <span>0</span>
                <span>0</span>
                <span>0</span>
                <span>0</span>
                <span>0</span>
                <span>0</span>
                <span><strong>Опалення</strong></span>
                <span>0</span>
                <span>0</span>
                <span>0</span>
                <span>0</span>
                <span>0</span>
                <span>0</span>
                <span>0</span>
                <span><strong>Інтернет</strong></span>
                <span>0</span>
                <span>0</span>
                <span>0</span>
                <span>0</span>
                <span>0</span>
                <span>0</span>
                <span>0</span>
                <span><strong>Телебачення</strong></span>
                <span>0</span>
                <span>0</span>
                <span>0</span>
                <span>0</span>
                <span>0</span>
                <span>0</span>
                <span>0</span>
                <span><strong>Додаткові витрати</strong></span>
                <span>0</span>
                <span>0</span>
                <span>0</span>
                <span>0</span>
                <span>0</span>
                <span>0</span>
                <span>0</span>
            </div>
            <div className='profile__payments-result'>
                <span><strong>ВСЬОГО:</strong></span>
                <span><strong>0</strong></span>
            </div>
            <button className='btn-accent'>Оплатити</button>
        </div>
    );
}

export default Payments;