import s from './Profile.module.css';

const Profile = () => {
    return (
        <section className={s.content}>
        <div>
          <img src='https://cdn.wallpapersafari.com/12/61/dPZyxR.png' />
        </div>
        <div>
          Ava + Description
        </div>
        <div>
          My posts
          <div className={s.Posts}>
            New post
          </div>
          <div className={s.item}>
            Post 1
          </div>
          <div className={s.item}>
            Post 2
          </div>
        </div>
      </section>
    );
}

export default Profile;