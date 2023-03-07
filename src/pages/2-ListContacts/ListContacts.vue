<template>
  <div class="container">
    <div class="contactsTable">
      <header class="containerTitle">
        <h2>Contatos</h2>
      </header>
      <section class="table">
        <div class="tableTitle">
          <div class="search">
            <InputSearch type="text" placeholder="Buscar Contato" @input="updateValueDistrict" />
          </div>
          <div class="newContact">
            <AddNewContact @addNewContact="getAllContacts()" :token="this.token" />
          </div>
        </div>

        <table class="tableContacts">
          <thead>
            <tr class="trNav">
              <th class="thName">
                Nome
                <button :class="{ rotate: isRotated }" class="btnDesc">
                  <img src="@/assets/image/iconDesc.png" alt="" />
                </button>
              </th>
              <th class="thEmail">Email</th>
              <th class="thPhone">Telefone</th>
              <th class="thActions"></th>
            </tr>
          </thead>

          <tbody class="tableBody" v-if="this.contacts">
            <div class="scroll">
              <tr v-for="contact in this.contacts" :key="contact.id" class="trBody">
                <td class="tdName">
                  <div class="tdPhoto">Foto</div>
                  <span class="name">{{ contact.name }}</span>
                </td>
                <td class="tdEmail">
                  <span>{{ contact.email }}</span>
                </td>
                <td class="tdPhone">
                  <span>{{ contact.phone }}</span>
                </td>
                <td class="tdActions">
                  <div>
                    <ButtonEdit @click="openEditDialog(contact.id)" />
                  </div>
                  <div>
                    <DeleteContact
                      :id="contact.id"
                      :token="this.token"
                      @deleteContact="getAllContacts()"
                    />
                  </div>
                </td>
              </tr>
            </div>
          </tbody>
        </table>

        <div class="noContacts" v-if="!this.contacts">
          <div class="imageNoContacts">
            <img src="@/assets/image/imageNoContacts.png" alt="noContacts" />
            <div class="textNoContacts">Ainda não há contatos</div>
            <div class="buttonNoContact">
              <AddNewContact @addNewContact="getAllContacts()" :token="this.token" />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  <EditContact @editContact="getAllContacts()" :id="this.idContact" :token="this.token" />
</template>
<script src="./listContacts.ts"></script>
