import Keybase from '/client/lib/keybase'

Template.module_ownershipIssueShares.rendered = () => {
  this.$('.dropdown').dropdown()
}

Template.module_ownershipIssueShares.helpers({
  selectedReceiver: () => (TemplateVar.getFrom('#keybase_el', 'user')),
  addressForUser: ReactivePromise(Keybase.getEthereumAddress)
})

Template.module_ownershipIssueShares.events({
  "click .label.close": () => {
    Session.set('module_ownershipState', 'module_ownershipEmpty')
  }
})
