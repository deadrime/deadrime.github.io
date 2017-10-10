class instagrammApp {
    constructor() {
        this.showData()
    }
    async getData() {
        let response = await fetch('instagram_data.json');
        if (response.status !== 200 && response.headers.get('Content-Type') !== 'application/json')
            throw new Error('Cannot open file');
        let instagram_data = await response.json();
        if (!('data' in instagram_data)) {
            throw new Error('Wrong data');
        }
        let data = await instagram_data.data;
        return data;
        
        /* Вариант через промисы

        return fetch('instagram_data.json')
            .then( response => {
                if (response.status !== 200 && response.headers.get('Content-Type') !== 'application/json') {
                    return Promise.reject(new Error('Cannot open file'))
                }
                else return Promise.resolve(response.json());
            })
            .then( instagram_data => {
                if ('data' in instagram_data) {
                    console.log(instagram_data);
                    return Promise.resolve(instagram_data.data);
                }
                else return Promise.reject(new Error('Wrong data'));
            })
            .then( data => {
                console.log(data);
                return data; // я должен вернуть тут просто дату или Promise.resolve ?
            })
            .catch(error => {
                console.log(error) // как нормально обработать ошибку?
            });
        */
    }

    showData() {
        let instagrammList = document.getElementById('instagram__list');
        this.getData() // если бы я захотел сделать что-то типа let data = this.getData() - как это провернуть?
            .then(data => {
                console.log(data);
                for (let item of data) {
                    console.log(item);
                    let newPost = document.createElement('div');
                    newPost.className = "post";

                    let landscape = item.images.standard_resolution.width > item.images.standard_resolution.height;
                    let pictureOnly = !item.caption;
                    if (landscape || pictureOnly) {
                        newPost.className += ' post--2x1'
                    }
                    if (pictureOnly) {
                        newPost.className += ' post--landscape'
                    }

                    newPost.innerHTML =
                        `<header class='post-user'>
                            <div class='post-user__avatar'><img src='${item.user.profile_picture}'></div>
                            <div class="post-user__name-wrapper">
                                <div class='post-user__nickname'>${item.user.username}</div>
                                <div class='post-user__fullname'>${item.user.full_name}"</div>
                            </div>
                        </header>
                        <div class='post-info__image'><img src='${item.images.standard_resolution.url}'></div>
                        <div class='post-info'>
                            ${ item.caption ? item.caption.text : ''}
                        </div>
                        <footer class="post-footer">
                            <div class='post-footer__likes'><i class='icon-like'>💗</i>${item.likes.count}</div>
                        </footer>`;
                    instagrammList.appendChild(newPost);
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
}

new instagrammApp();


