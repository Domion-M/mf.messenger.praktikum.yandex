export const tpl = `
{{#with page}}
<main class="d-flex">
<div class="return-page">
</div>
<div class="wrap-page text-center">
    <div class="user-profile">
        <div class="user-profile__avatar">
            <div class="user-profile__data-profile">
                
            </div>
            <h3>Test</h3>
        </div>
        <form action="/" method="POST">
            <div>
                <div class="user-profile__data-profile">
                    <div class="user-profile__data-profile__list">
                        <div class="name-data">Почта</div>
                        <div class="chenge-data-user"><input type="text" value="yandex@ya.ru" name="email" class="input-data">
                        </div>
                    </div>
                    <div class="user-profile__data-profile__list">
                        <div class="name-data">Логин</div>
                        <div class="chenge-data-user"><input type="text" value="VasiaPupkin" name="login" class="input-data"></div>
                    </div>
                    <div class="user-profile__data-profile__list">
                        <div class="name-data">Имя</div>
                        <div class="chenge-data-user"><input type="text" value="Алексей" name="first_name" class="input-data">
                        </div>
                    </div>
                    <div class="user-profile__data-profile__list">
                        <div class="name-data">Фамилия</div>
                        <div class="chenge-data-user"><input type="text" value="Алексеев" name="second_name" class="input-data">
                        </div>
                    </div>
                    <div class="user-profile__data-profile__list">
                        <div class="name-data">Имя в чате</div>
                        <div class="chenge-data-user"><input type="text" value="Бодрый" name="display_name" class="input-data">
                        </div>
                    </div>
                    <div class="user-profile__data-profile__list">
                        <div class="name-data">Телефон</div>
                        <div class="chenge-data-user">
                            <input type="text" value="8 800 2000 600" name="phone" class="input-data">
                        </div>
                    </div>
                </div>
            </div>
            <div>
        </form>
        <div class="user-profile__action">
        </div>
    </div>
</div>
</div>
</main>
{{/with}}`;