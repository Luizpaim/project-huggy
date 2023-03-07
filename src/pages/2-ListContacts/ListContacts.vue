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
            <AddNewContact
              @addNewContact="getAllContacts()"
              token="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjhmZDRmYTQzYjQwZDljNDNmYjM4MDc1M2ZhMGM3NGViYWNhM2Y2NTQzNDQxNWZmZTk2NGMwM2VkYWY4MzUzMjZkZmVkMDg0NDg3YmFlZDJjIn0.eyJhdWQiOiJBUFAtNzkzZDdkNGUtOGY1Zi00NzEzLWE3MzYtYTYzNDBlZDNjYmMwIiwianRpIjoiOGZkNGZhNDNiNDBkOWM0M2ZiMzgwNzUzZmEwYzc0ZWJhY2EzZjY1NDM0NDE1ZmZlOTY0YzAzZWRhZjgzNTMyNmRmZWQwODQ0ODdiYWVkMmMiLCJpYXQiOjE2Nzc5MDgzODEsIm5iZiI6MTY3NzkwODM4MSwiZXhwIjoxNjkzODA1OTgwLCJzdWIiOiIxMTk2MDAiLCJzY29wZXMiOlsiaW5zdGFsbF9hcHAiLCJyZWFkX2FnZW50X3Byb2ZpbGUiXX0.LYRotoHVS6KBeSjAD0lIvRobAwlLPCsv7BsbbPHTkB7Uggk-SHWyRl23otraj_ZGFeDn-LsrmIKEIJF0YxGZ_xoil-dx0HPTIHPgHtMbvJ8w274hLTtTOVyLBS72FKsF-fIaTLvnB2GW7vwLz7F8M1d1HP5wPquYjM5f7HuSAEU"
            />
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
                  <span>{{ contact.name }}</span>
                </td>
                <td class="tdEmail">
                  <span>{{ contact.email }}</span>
                </td>
                <td class="tdPhone">
                  <span>{{ contact.phone }}</span>
                  
                </td>
                <td class="tdActions">
                  <div>btn editar</div>
                  <div>btn excluir</div>
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
              <AddNewContact
                @addNewContact="getAllContacts()"
                token="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjhmZDRmYTQzYjQwZDljNDNmYjM4MDc1M2ZhMGM3NGViYWNhM2Y2NTQzNDQxNWZmZTk2NGMwM2VkYWY4MzUzMjZkZmVkMDg0NDg3YmFlZDJjIn0.eyJhdWQiOiJBUFAtNzkzZDdkNGUtOGY1Zi00NzEzLWE3MzYtYTYzNDBlZDNjYmMwIiwianRpIjoiOGZkNGZhNDNiNDBkOWM0M2ZiMzgwNzUzZmEwYzc0ZWJhY2EzZjY1NDM0NDE1ZmZlOTY0YzAzZWRhZjgzNTMyNmRmZWQwODQ0ODdiYWVkMmMiLCJpYXQiOjE2Nzc5MDgzODEsIm5iZiI6MTY3NzkwODM4MSwiZXhwIjoxNjkzODA1OTgwLCJzdWIiOiIxMTk2MDAiLCJzY29wZXMiOlsiaW5zdGFsbF9hcHAiLCJyZWFkX2FnZW50X3Byb2ZpbGUiXX0.LYRotoHVS6KBeSjAD0lIvRobAwlLPCsv7BsbbPHTkB7Uggk-SHWyRl23otraj_ZGFeDn-LsrmIKEIJF0YxGZ_xoil-dx0HPTIHPgHtMbvJ8w274hLTtTOVyLBS72FKsF-fIaTLvnB2GW7vwLz7F8M1d1HP5wPquYjM5f7HuSAEU"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script src="./listContacts.ts"></script>
