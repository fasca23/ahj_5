// eslint-disable-next-line import/prefer-default-export
export class Tooltip {
  constructor(tooltip) {
    // eslint-disable-next-line no-underscore-dangle
    this._tooltip = tooltip;
  }

  // eslint-disable-next-line class-methods-use-this
  addTooltip(element) {
    // Создаем все необходимые элементы
    const tooltipWrap = document.createElement('div');
    tooltipWrap.classList.add('tooltip-wrapper');
    const tooltipTitle = document.createElement('h3');
    tooltipTitle.classList.add('tooltip-title');
    tooltipTitle.textContent = 'Подсказка....';
    const tooltipText = document.createElement('div');
    tooltipText.classList.add('tooltip-text');
    tooltipText.textContent = 'Супер контент!!! Жмякай еще раз....';
    // Собираем их между собой
    tooltipWrap.prepend(tooltipTitle);
    tooltipWrap.append(tooltipText);
    document.body.append(tooltipWrap);

    const { left } = element.getBoundingClientRect();

    tooltipWrap.style.bottom = `${tooltipWrap.offsetHeight + element.offsetHeight + 10}px`;
    tooltipWrap.style.left = `${left + (element.offsetWidth - tooltipWrap.offsetWidth) / 2 - 8}px`;
  }

  // eslint-disable-next-line class-methods-use-this
  removeTooltip() {
    const currentTooltip = document.querySelector('.tooltip-wrapper');
    currentTooltip.remove();
  }
}
