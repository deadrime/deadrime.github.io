import IconGithub from '@/icons/github.svg';
// import IconHabr from '@/icons/habr.svg';
import IconTelegram from '@/icons/telegram.svg';
import IconEmail from '@/icons/email2.svg';
import classNames from 'classnames';

const Contacts: React.FC<{
  className?: string
}> = ({ className }) => {
  return (
    <div className={classNames('flex gap-3 items-center', className)}>
      <a href="https://github.com/deadrime" target="_blank">
        <IconGithub className="w-6" />
      </a>
      <a href="https://t.me/deadrime" target="_blank">
        <IconTelegram className="w-6" />
      </a>
      <a href="mailto:deadrime@yandex.ru" target="_blank">
        <IconEmail className="w-6" />
      </a>
      <a href="https://career.habr.com/deadrime" target="_blank">
        <span className="text-body1"><b>Хабр</b> Карьера</span>
      </a>
    </div>
  )
}

export default Contacts;
