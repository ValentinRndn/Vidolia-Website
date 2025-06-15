import frMessages from '~/locales/fr.json'
import deMessages from '~/locales/de.json'
import ruMessages from '~/locales/ru.json'
import trMessages from '~/locales/tr.json'

export default defineNuxtPlugin(({ $i18n }) => {
  $i18n.setLocaleMessage('fr', frMessages)
  $i18n.setLocaleMessage('de', deMessages)
  $i18n.setLocaleMessage('ru', ruMessages)
  $i18n.setLocaleMessage('tr', trMessages)
}) 