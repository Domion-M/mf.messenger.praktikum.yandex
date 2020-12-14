export const tpl = `
{{#with page}}
<main class="wrap-page">
<div class="window-chat">
    <aside class="window-chat__select">
        <div class="window-chat__select__head">
            <div class="profile-wrap"></div>
            <div class="search"><input type="text">
                <span>Поиск</span>
            </div>
        </div>
        <ul class="window-chat__select__list-chat">
        {{#each userchats}}
            <li class="{{className}}">
                <div class="img"><span class="img-chat"></span></div>
                <div class="info">
                    <p class="name-chat">{{nameChat}}</p>
                    <span class="last-message">{{lastMessage}}</span>
                </div>
                <time class="date">{{time}}</time>
                {{#if newMessage}}
                <div class="alert-message">{{newMessage}}</div>
                {{/if}}
            </li>
           {{/each}}
        </ul>
    </aside>
    <div class="window-chat__message">
        <div class="window-chat__message__wrap">
            <nav class="window-chat__message__head-chat">
                <div class="chat-img"><span></span> Test</div>                
            </nav>
            <div class="window-chat__message__wrap__modal-menu">
                <div class="menu-list-action">
                    <div></div><span>Добавить пользователя</span>
                </div>
                <div class="menu-list-action">
                    <div class="menu-list-action__delete"></div><span>Удалить пользователя</span>
                </div>
                <div class="menu-list-action">
                    <div class="menu-list-action__delete delete"></div><span>Удалить чат</span>
                </div>
            </div>
            <div class="window-chat__message__body-chat">
                <div class="compamion-message">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint esse illum ex laboriosam
                        reiciendis aspernatur cupiditate delectus recusandae fuga quis magni, deserunt
                        voluptates labore et harum veniam dignissimos architecto facilis?
                    </p>
                </div>
                <div class="compamion-message">
                    <p>ok</p>
                </div>
                <div class="your-massege">
                    <p>Ок, я проверю</p>
                </div>
            </div>
            <form action="/" method="POST">
                <div class="window-chat__message__send-message">
                    <div class="load-file"><img src="./img/clip.png" alt="clip"></div>
                    <div class="send-mail"></div>                    
                </div>
            </form>
        </div>
    </div>
</div>
</main>
{{/with}}`;
//# sourceMappingURL=template.js.map