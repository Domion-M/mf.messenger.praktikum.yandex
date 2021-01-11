export const tpl = `
{{#with user}}
        <div>
        <h3>Введите старый пороль и новый</h3>
            <form action="/" method="POST">
                <div class="user-profile__data-profile">
                    <div class="user-profile__data-profile__list">
                        <div class="name-data">Старый пороль</div>
                        <div class="chenge-data-user"><input type="password" value="" name="oldPassword" />
                        </div>
                    </div>
                    <div class="user-profile__data-profile__list">
                        <div class="name-data">Новый пароль</div>
                        <div class="chenge-data-user">
                            <input type="password" value="" name="newPassword" /></div>
                    </div>
                    <div class="user-profile__data-profile__list">
                        <div class="name-data">Поаторить новый пароль</div>
                        <div class="chenge-data-user"><input type="password" value="" name="newPasswordToo" /></div>
                    </div>
                </div>
            </form>
        </div>
    {{/with}}
        `;
