export const tpl = `
{{#with user}}
<div class="user-profile__avatar">
            <div class="user-profile__data-profile"> 
            {{#if avatar}}
       <img src="https://ya-praktikum.tech{{avatar}}" alt="foto" class="foto-user"/>
       {{/if}}               
            </div>
            <h3>{{first_name}}</h3>
        </div>
<form action="/" method="POST">
            <div>
                <div class="user-profile__data-profile">
                    <div class="user-profile__data-profile__list">
                        <div class="name-data">Почта</div>
                        <div class="chenge-data-user"><input type="text" value="{{email}}" name="email" class="input-data">
                        </div>
                    </div>
                    <div class="user-profile__data-profile__list">
                        <div class="name-data">Логин</div>
                        <div class="chenge-data-user"><input type="text" value="{{login}}" name="login" class="input-data"></div>
                    </div>
                    <div class="user-profile__data-profile__list">
                        <div class="name-data">Имя</div>
                        <div class="chenge-data-user"><input type="text" value="{{first_name}}" name="first_name" class="input-data">
                        </div>
                    </div>
                    <div class="user-profile__data-profile__list">
                        <div class="name-data">Фамилия</div>
                        <div class="chenge-data-user"><input type="text" value="{{second_name}}" name="second_name" class="input-data">
                        </div>
                    </div>
                    <div class="user-profile__data-profile__list">
                        <div class="name-data">Имя в чате</div>
                        <div class="chenge-data-user"><input type="text" value="{{display_name}}" name="display_name" class="input-data">
                        </div>
                    </div>
                    <div class="user-profile__data-profile__list">
                        <div class="name-data">Телефон</div>
                        <div class="chenge-data-user">
                            <input type="text" value="{{phone}}" name="phone" class="input-data">
                        </div>
                    </div>
                </div>
            </div>
            <div>
        </form>
        {{/with}}
        `