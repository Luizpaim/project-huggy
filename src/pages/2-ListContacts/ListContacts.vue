<template>
  <div class="container">
    <div class="contactsTable">
      <header class="containerTitle">
        <h2>Contatos</h2>
      </header>
      <section class="table">
        <div class="tableTitle">
          <div class="search">
            <InputSearch
              :value="paramsFilter"
              type="text"
              placeholder="Buscar Contato"
              @input="updateValueSearch"
              @keypress="getAllContacts($event)"
              @keyup="getAllContacts($event)"
            />
          </div>
          <div class="newContact">
            <AddNewContact @addNewContact="getAllContacts()" :token="this.token" />
          </div>
        </div>

        <div class="tableContacts">
          <LoadingHuggy :active="loading" :loadingTable="true" />
          <table>
            <thead>
              <tr class="trNav">
                <th class="thName">
                  Nome
                  <button @click="reverseData" :class="{ rotate: isRotated }" class="btnDesc">
                    <img src="@/assets/image/iconDesc.png" alt="" />
                  </button>
                </th>
                <th class="thEmail">Email</th>
                <th class="thPhone">Telefone</th>
                <th class="thActions"></th>
              </tr>
            </thead>
            <div class="noContacts" v-if="!this.contacts || this.contacts.length <= 0">
              <div class="imageNoContacts">
                <img src="@/assets/image/imageNoContacts.png" alt="noContacts" />
                <div class="textNoContacts">Ainda não há contatos</div>
                <div class="buttonNoContact">
                  <AddNewContact @addNewContact="getAllContacts()" :token="this.token" />
                </div>
              </div>
            </div>
            <tbody class="tableBody" v-if="this.contacts || this.contacts.length > 0">
              <tr v-for="contact in this.contacts" :key="contact.id" class="trBody">
                <div class="itemHover" :class="{ selected: contact.id === selected }">
                  <td class="tdName">
                    <div class="tdPhoto" @click="openDetailsDialog(contact.id)">
                      <Avatar :src="contact.photo" :name="contact.name" />
                    </div>
                    <span class="name">{{ contact.name }}</span>
                  </td>
                  <td class="tdEmail">
                    <span>{{ contact.email }}</span>
                  </td>
                  <td class="tdPhone">
                    <span>{{ contact.phone }}</span>
                  </td>
                  <td class="tdActions">
                    <div class="btnEdit">
                      <ButtonEdit @click="openEditDialog(contact.id)" />
                    </div>
                    <div class="btnDelete">
                      <DeleteContact
                        :id="contact.id"
                        :token="this.token"
                        @deleteContact="getAllContacts()"
                      />
                    </div>
                  </td>
                </div>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
  <EditContact @editContact="getAllContacts()" :id="this.idContact" :token="this.token" />
  <DetailsContact @detailsContact="getAllContacts()" :id="this.idContact" :token="this.token" />
</template>
<script src="./listContacts.ts"></script>
