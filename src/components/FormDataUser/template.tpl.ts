export const tpl = `
{{#with user}}
<div class="user-profile__avatar">
    <div class="user-profile__data-profile-wrap">
       {{#if avatar}}
       <img src="https://ya-praktikum.tech{{avatar}}" alt="foto" class="foto-user"/>
       {{/if}}
    </div>
    <h3>{{first_name}}</h3>
    </div>
<div>
    <div class="user-profile__data-profile">
        <div class="user-profile__data-profile__list">
            <div class="name-data">Почта</div>
            <div class="chenge-data-user">{{email}}</div>
        </div>
        <div class="user-profile__data-profile__list">
            <div class="name-data">Логин</div>
            <div class="chenge-data-user">{{login}}</div>
        </div>
        <div class="user-profile__data-profile__list">
            <div class="name-data">Имя</div>
            <div class="chenge-data-user">{{first_name}}</div>
        </div>
        <div class="user-profile__data-profile__list">
            <div class="name-data">Фамилия</div>
            <div class="chenge-data-user">{{second_name}}</div>
        </div>
        <div class="user-profile__data-profile__list">
            <div class="name-data">Имя в чате</div>
            <div class="chenge-data-user">{{display_name}}</div>
        </div>
        <div class="user-profile__data-profile__list">
            <div class="name-data">Телефон</div>
            <div class="chenge-data-user">{{phone}}</div>
        </div>
    </div>
</div>
{{/with}}`