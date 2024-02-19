import classNames from 'classnames';
import SvgGithub from '@/svgComponents/Github';
import SvgTelegram from '@/svgComponents/Telegram';
import SvgEmail2 from '@/svgComponents/Email2';

const Contacts: React.FC<{
  className?: string
}> = ({ className }) => {
  return (
    <div className={classNames('flex gap-3 items-center', className)}>
      <a href="https://github.com/deadrime" aria-label="github" target="_blank">
        <SvgGithub className="w-6" />
      </a>
      <a href="https://t.me/deadrime" aria-label="telegram" target="_blank">
        <SvgTelegram className="w-6" />
      </a>
      <a href="mailto:deadrime@yandex.ru" aria-label="email" target="_blank">
        <SvgEmail2 className="w-6" />
      </a>
      <a href="https://career.habr.com/deadrime" aria-label="habr career" target="_blank">
        <span className="text-body1"><b>Хабр</b> Карьера</span>
      </a>
    </div>
  )
}

export default Contacts;
