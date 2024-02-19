import classNames from 'classnames';
import SvgGithub from '@/iconComponents/Github';
import SvgTelegram from '@/iconComponents/Telegram';
import SvgEmail2 from '@/iconComponents/Email2';

const Contacts: React.FC<{
  className?: string
}> = ({ className }) => {
  return (
    <div className={classNames('flex gap-3 items-center', className)}>
      <a href="https://github.com/deadrime" target="_blank">
        <SvgGithub className="w-6" />
      </a>
      <a href="https://t.me/deadrime" target="_blank">
        <SvgTelegram className="w-6" />
      </a>
      <a href="mailto:deadrime@yandex.ru" target="_blank">
        <SvgEmail2 className="w-6" />
      </a>
      <a href="https://career.habr.com/deadrime" target="_blank">
        <span className="text-body1"><b>Хабр</b> Карьера</span>
      </a>
    </div>
  )
}

export default Contacts;
