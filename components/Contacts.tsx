import classNames from 'classnames';
import IconGithub from '@/assets/icons/github.svg?react'
import IconTelegram from '@/assets/icons/telegram.svg?react'
import IconEmail from '@/assets/icons/email.svg?react'
import IconHabr from '@/assets/icons/habr.svg?react'

const Contacts: React.FC<{
  className?: string
}> = ({ className }) => {
  return (
    <div className={classNames('flex gap-3 items-center', className)}>
      <a href="https://github.com/deadrime" aria-label="github" target="_blank" className="text-neutral hover:text-text/70 transition-colors focus-within:text-text/70" rel="noreferrer">
        <IconGithub className="w-8 h-8" />
      </a>
      <a href="https://t.me/deadrime" aria-label="telegram" target="_blank" className="text-neutral hover:text-text/70 transition-colors focus-within:text-text/70" rel="noreferrer">
        <IconTelegram className="w-8 h-8" />
      </a>
      <a href="mailto:deadrime@yandex.ru" aria-label="email" target="_blank" className="text-neutral hover:text-text/70 transition-colors focus-within:text-text/70" rel="noreferrer">
        <IconEmail className="w-8 h-8" />
      </a>
      <a href="https://career.habr.com/deadrime" aria-label="habr career" target="_blank" className="text-neutral hover:text-text/70 transition-colors focus-within:text-text/70" rel="noreferrer">
        <IconHabr className="w-8 h-8" />
      </a>
    </div>
  );
};

export default Contacts;
