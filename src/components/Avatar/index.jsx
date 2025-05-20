import './Avatar.scss';
const Avatar = ({user}) => {
  return (
    <div className="avatar">
      <h2 className='avatar-name'>{user.name}</h2>
      <img className='avatar-img'  src={user.picture} alt="Avatar" />
    </div>
  );
}
export default Avatar;